'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Users', [{
            token: "d5bjpKCX5nmINVTYm2N3fi:APA91bG1bThCAg9Jd_HnhS93xR6w9d3TVZ3pxfzDq9gtGPsldk8-lGrsTw9Fl4ZyRl5_GO8oFFPQ4aJc9W3k3ramOBAdva2IrD7_zMDngibX6_hQhdnna3akULRBv2unxcPkc-6NWkdk",
            createdAt: new Date(),
            updatedAt: new Date()
        }]);
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Users', null, {});
    }
};