const { Gym } = require('../models');
const gymData = [
  {
    id: 1,
    gym_name: 'Planet Fitness',
    zipcode: JSON.stringify(['92802', '92782', '92708', '92706','92705', '92677', '92648', '92630', '92627', '90680', '90621']),
  },
  {
    id: 2,
    gym_name: 'Golds',
    zipcode: JSON.stringify(['92804',])
  },
  {
    id: 3,
    gym_name: 'Crunch',
    zipcode: JSON.stringify(['92804', '92708', '92649'])
  },
  {
    id : 4,
    gym_name: 'EOS',
    zipcode: JSON.stringify(['92705', '92694'])
  },
  {
    id: 5,
    gym_name: '24 Hour Fitness',
    zipcode: JSON.stringify(['92886', '92869','92868','92865','92841','92835','92821','92808','92801','92708',
      '92705','92704','92694','92691','92688','92677','92675','92649','92647','92646','92630','92627','92618','92626','92618','92602','90720','90620',])
  },
  {
    d: 6,
    gym_name : 'La Fitness',
    zipcode: JSON.stringify(['92886','92868','92845','92807','92708','92705','92704','92691','92648','92630','92620','92612','92610','92606','90631'])

  }

];

const seedGyms = () => Gym.bulkCreate(gymData);
module.exports= seedGyms;