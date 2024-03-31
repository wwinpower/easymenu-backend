const Course = require('../models/product.model.js');
// const data = require('./json/products.js');
const data = [
    {
        id: "1",
        name: {
            ru: "Пицца Бургер",
            am: "Պիցցա Բուրգեր",
            eng: "Pizza Burger"
        },
        price: {
            amd: 4500,
            usd: 9,
            rub: 1000
        },
        description: {
            ru: "Сыр Моцарелла, фарш говяжий, лук красный, сыр Чеддер, помидоры, соус BBQ, соус томатный, огурцы маринованные",
            am: "Պանիր Մոցարելլա, աղացած տավարի միս, կարմիր սոխ, չեդդեր պանիր, լոլիկ, BBQ սոուս, տոմատի սոուս, մարինացված վարունգ",
            eng: "Mozzarella cheese, minced beef, red onion, Cheddar cheese, tomatoes, BBQ sauce, tomato sauce, pickled cucumbers"
        },
        included: [
            {
                id: "1",
                name: {
                    ru: "Сыр Моцарелла",
                    am: "Պանիր Մոցարելլա",
                    eng: "Mozzarella cheese"
                },
                value: 40,
                units: {
                    id: "1",
                    name: {ru: "гр.", am: "գր․", eng: "g"},
                    value: "g"
                }
            },
            {
                id: "2",
                name: {
                    ru: "фарш говяжий",
                    am: "Աղացած տավարի միս",
                    eng: "Կարմիր սոխ"
                },
                value: 20,
                units: {
                    id: "1",
                    name: {ru: "гр.", am: "գր․", eng: "g"},
                    value: "g"
                }
            },
            {
                id: "3",
                name: {
                    ru: "лук красный",
                    am: "կարմիր սոխ",
                    eng: "red onion"
                },
                value: 40,
                units: {
                    id: "1",
                    name: {ru: "гр.", am: "գր․", eng: "g"},
                    value: "g"
                }
            },
            {
                id: "4",
                name: {
                    ru: "сыр Чеддер",
                    am: "չեդդեր պանիր",
                    eng: "Cheddar cheese"
                },
                value: 40,
                units: {
                    id: "1",
                    name: {ru: "гр.", am: "գր․", eng: "g"},
                    value: "g"
                }
            },
            {
                id: "5",
                name: {
                    ru: "помидоры",
                    am: "լոլիկ",
                    eng: "tomatoes"
                },
                value: 20,
                units: {
                    id: "1",
                    name: {ru: "гр.", am: "գր․", eng: "g"},
                    value: "g"
                }
            },
            {
                id: "6",
                name: {
                    ru: "соус BBQ",
                    am: "BBQ սոուս",
                    eng: "BBQ sauce"
                },
                value: 20,
                units: {
                    id: "1",
                    name: {ru: "гр.", am: "գր․", eng: "g"},
                    value: "g"
                }
            },
            {
                id: "7",
                name: {
                    ru: "соус томатный",
                    am: "տոմատի սոուս",
                    eng: "tomato sauce"
                },
                value: 20,
                units: {
                    id: "1",
                    name: {ru: "гр.", am: "գր․", eng: "g"},
                    value: "g"
                }
            },
            {
                id: "8",
                name: {
                    ru: "огурцы маринованные",
                    am: "մարինացված վարունգ",
                    eng: "pickled cucumbers"
                },
                value: 20,
                units: {
                    id: "1",
                    name: {ru: "гр.", am: "գր․", eng: "g"},
                    value: "g"
                }
            }
        ],
        count: 1,
        image: "https://d9de67c9-7c80-4867-9059-316e0ef5445b.selstorage.ru/e87e352b-5887-48a2-abdd-d11974db2f14/product_images/compiled/square_large_jpeg/1-412-68888286b15edda34e48f0f5263c4a12b59b3c6c0ca98524b50ff357bc6576fa-810x810.jpeg",
        modifiers: [
            {
                id: "1",
                name: {
                    ru: "Топпинги",
                    am: "Տոպինգներ",
                    eng: "Toppings"
                },
                type: "multiple",
                required: true,
                options: [
                    {
                        id: "1",
                        name: {ru: "Сыр", am: "Պանիր", eng: "Cheese"},
                        price: {
                            amd: 250,
                            usd: 5,
                            rub: 200
                        },
                        default: false,
                        included: true,
                        value: 40,
                        count: 0,
                        maxCount: 2,
                        units: {
                            id: "1",
                            name: {ru: "гр.", am: "գր․", eng: "g"},
                            value: "g"
                        }
                    },
                    {
                        id: "2",
                        name: {ru: "Грибы", am: "Սունկ", eng: "Mushrooms"},
                        price: {
                            amd: 300,
                            usd: 5,
                            rub: 200
                        },
                        default: false,
                        included: true,
                        value: 20,
                        count: 0,
                        maxCount: 2,
                        units: {
                            id: "1",
                            name: {ru: "гр.", am: "գր․", eng: "g"},
                            value: "g"
                        }
                    },
                    {
                        id: "3",
                        name: {ru: "Колбаса", am: "Երշիկ", eng: "Sausage"},
                        price: {
                            amd: 200,
                            usd: 5,
                            rub: 200
                        },
                        default: false,
                        included: true,
                        value: 20,
                        count: 0,
                        maxCount: 2,
                        units: {
                            id: "1",
                            name: {ru: "гр.", am: "գր․", eng: "g"},
                            value: "g"
                        }
                    }
                ]
            },
            {
                id: "2",
                name: {
                    ru: "Размер",
                    am: "Չափ",
                    eng: "Size"
                },
                type: "single",
                required: true,
                options: [
                    {
                        id: "1",
                        name: {ru: "", am: "", eng: ""},
                        value: 20,
                        price: {
                            amd: 0,
                            usd: 0,
                            rub: 0
                        },
                        default: true,
                        included: true,
                        selected: true,
                        units: {
                            id: "4",
                            name: {ru: "см", am: "սմ", eng: "cm"},
                            value: "cm"
                        }
                    },
                    {
                        id: "2",
                        name: {ru: "", am: "", eng: ""},
                        value: 30,
                        price: {
                            amd: 1000,
                            usd: 5,
                            rub: 200
                        },
                        default: false,
                        included: true,
                        selected: false,
                        units: {
                            id: "4",
                            name: {ru: "см", am: "սմ", eng: "cm"},
                            value: "cm"
                        }
                    },
                    {
                        id: "3",
                        name: {ru: "", am: "", eng: ""},
                        value: 40,
                        price: {
                            amd: 1500,
                            usd: 5,
                            rub: 200
                        },
                        default: false,
                        included: true,
                        selected: false,
                        units: {
                            id: "4",
                            name: {ru: "см", am: "սմ", eng: "cm"},
                            value: "cm"
                        }
                    },
                ]
            }
        ],
        categoryId: "7"
    }
]


exports.create = (req, res) => {
    if (!req.body.title) {
        return res.status(400).send({
            message: "Содержание не может быть пустым"
        });
    }

    const course = new Course({
        title: req.body.title,
        dateStart: req.body.dateStart
    });

    course.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "При создании данных произошла ошибка."
        });
    });
};

exports.findByCategoryId = (req, res) => {

    const {categoryId} = req.params;

    const product = data.filter(item => item.categoryId === categoryId);

    res.send(product);

    // Course.find()
    //     .then(courses => {
    //         res.send(data);
    //     }).catch(err => {
    //     res.status(500).send({
    //         message: err.message || "При получении данных произошла ошибка."
    //     });
    // });
};

exports.findById = (req, res) => {
    const {productId} = req.params;

    const product = data.find(item => item.id === productId);

    res.send(product);

    // Course.find({id: req.body.id})
    //     .then(courses => {
    //         res.send(courses);
    //     }).catch(err => {
    //     res.status(500).send({
    //         message: err.message || "При получении данных произошла ошибка."
    //     });
    // });
};

exports.delete = (req, res) => {
    Course.deleteMany({_id: req.body.id})
        .then(() => {
            Course.find().then(courses => {
                res.send(courses);
            }).catch(err => {
                res.status(500).send({
                    message: err.message || "При получении данных произошла ошибка."
                });
            })
        }).catch(err => {
        res.status(500).send({
            message: err.message || "При удалении данных произошла ошибка."
        });
    })
};
