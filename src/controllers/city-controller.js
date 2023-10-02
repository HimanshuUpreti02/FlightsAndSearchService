const {CityService} = require("../services/index");

const cityService = new CityService(); 

const create = async(req,res)=>{
    try {
        const city = await cityService.createCity(req.body);
        res.status(201).json({
            data : city ,
            success : true,
            message : "successfully created a city",
            err : {}
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data : {},
            success : false,
            message : "not able to create a city",
            err : error
        })
    }
    
}

const destroy = async(req,res)=>{
    try {
        const response = await cityService.deleteCity(req.params.id);
        res.status(200).json({
            data :  response,
            success : true,
            message : "successfully deleted a city",
            err : {}
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data : {},
            success : false,
            message : "not able to delete a city",
            err : error
        })
    }
}


const update = async(req,res)=>{
    try {
        const city = await cityService.updateCity(req.params.id , req.body);
        res.status(200).json({
            data :  city,
            success : true,
            message : "successfully updated a city",
            err : {}
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data : {},
            success : false,
            message : "not able to update a city",
            err : error
        })
    }
}


const get = async(req,res)=>{
    try {
        const city = await cityService.getCity(req.params.id);
        res.status(200).json({
            data :  city,
            success : true,
            message : "successfully fetched a city",
            err : {}
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data : {},
            success : false,
            message : "not able to fetch a city",
            err : error
        })
    }
}


module.exports = { 
    create , destroy , update, get
}