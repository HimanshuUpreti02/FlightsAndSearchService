const { City } = require("../models/index");

class CityRepository {
    async createCity({ name }) {
        try {
            const city = await City.create({ name });
            return city;
        } catch (error) {
            console.log("something went wrong in the repository layer");
            throw { error };
        }
    }

    async deleteCity(cityId) {
        try {
            await City.destroy({
                where: {
                    id: cityId
                }
            });
            return true;
        } catch (error) {
            console.log("something went wrong in the repository layer");

            throw { error };
        }
    }

    async updateCity(cityId, data) {
        try {
            // the below approach will not get the updated data .
            // can give in case of postgres
            /*
            const city = await City.update(data, {
                where: {
                    id: cityId
                },
                returning : true,
                pain :true
            });
            */
            const city = await City.findByPk(cityId);
            city.name = data.name;
            await city.save();
            return city;
        } catch (error) {
            console.log("something went wrong in the repository layer");

            throw { error }
        }
    }

    async getCity(cityId) {
        try {
            const city = await City.findByPk(cityId);
            return city;
        } catch (error) {
            console.log("something went wrong in the repository layer");

            throw { error };
        }
    }
}

module.exports = CityRepository;