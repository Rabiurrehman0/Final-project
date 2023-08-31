const { connect } = require('mongoose')
require('dotenv').config()
const Category = require('./model')


const addCategory = async (req, res) => {

    const { CategoryName, CategoryImage} = req.body

    if (!CategoryName || !CategoryImage) {
        res.status(403).json({
            message: "Invalid Values"
        })
    }

    else {

        try {
            await connect(process.env.MONGO_URL)
            console.log("DB Connected")
            const checkDuplicate = await Category.exists({ CategoryName: CategoryName})
            console.log("Duplicate==>", checkDuplicate)

            if (checkDuplicate) {
                res.json({
                    message: "Category Already Exists"
                })
            }
            else {
                await Category.create({ CategoryName, CategoryImage})
                const categories = await Category.find()

                res.json({
                    message: "Category Created Successfully",
                    categories
                })
            }
        }

        catch (error) {
            res.json({
                message: error.message
            })

        }

    }
}


const allCategories = async (req, res) => {

    try {
        await connect(process.env.MONGO_URL)

        const categories = await Category.find()
        res.json(
            {
                categories
            })
    }
    catch (error) {
        res.json({
            message: error.message
        })
    }
}

const CategorybyName = async (req, res) => {
    const { name } = req.params;


    try {
        await connect(process.env.MONGO_URL)
        const category = await Category.findOne({ CategoryName: name })
        res.json({
            category: category
        })
    }

    catch (error) {
        res.json({
            message: error.message
        })

    }

}

const CategorybyId = async (req, res) => {
    const { _id } = req.params;


    try {
        await connect(process.env.MONGO_URL)
        // const category = await Category.findOne({ _id: id })
        const category = await Category.findOne({ _id })

        res.json({
            category: category
        })
    }

    catch (error) {
        res.json({
            message: error.message
        })

    }

}



const DeleteCategory = async (req, res) => {
    const { _id } = req.body;

    if (!_id) {
        res.status(400).json({
            message: "Please give the category ID"
        })
    }

    else {
        try {
            await connect(process.env.MONGO_URL)
            await Category.deleteOne({ _id })
            const allcat = await Category.find()

            res.json({
                message: "Successfully Deleted",
                category: allcat
            })


        } catch (error) {
            res.status(400).json({
                message: error.message
            })

        }
    }

}

const updateCategory = async (req, res) => {
    const { _id, CategoryName, CategoryImage} = req.body

    const filter = { _id }
    const update = { CategoryName, CategoryImage}

    try {
        await connect(process.env.MONGO_URL)
        await Category.findOneAndUpdate(filter, update)
        const allcat = await Category.find()
        res.json({
            message: "Category Updated Successfully",
            category: allcat

            
        })

    }

    catch (error) {
        res.json({
            message: error.message
        })
    }

}


module.exports = { addCategory, allCategories, CategorybyName, CategorybyId, DeleteCategory, updateCategory }