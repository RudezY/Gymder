const { Gym } = require('../models');
const gymData = [
  {
    Id: 1,
    gym_name: 'La Fitness',
    zipcode: 90631
  },

  {
    Id: 2,
    gym_name: 'La Fitness',
    zipcode: 92606
  },

  {
    Id: 3,
    gym_name: 'La Fitness',
    zipcode: 92610
  },
  {
    Id: 4,
    gym_name: 'La Fitness',
    zipcode: 92612
  },
  {
    Id: 5,
    gym_name: 'La Fitness',
    zipcode: 92620
  },
  {
    Id: 6,
    gym_name: 'La Fitness',
    zipcode: 92630
  },
  {
    Id: 7,
    gym_name: 'La Fitness',
    zipcode: 92648
  },
  {
    Id: 8,
    gym_name: 'La Fitness',
    zipcode: 92691
  },
  {
    Id: 9,
    gym_name: 'La Fitness',
    zipcode: 92704
  },
  {
    Id: 10,
    gym_name: 'La Fitness',
    zipcode: 92705
  },
  {
    Id: 11,
    gym_name: 'La Fitness',
    zipcode: 92708
  },
  {
    Id: 12,
    gym_name: 'La Fitness',
    zipcode: 92807
  },
  {
    Id: 13,
    gym_name: 'La Fitness',
    zipcode: 92845
  },
  {
    Id: 14,
    gym_name: 'La Fitness',
    zipcode: 92868
  },
  {
    Id: 15,
    gym_name: 'La Fitness',
    zipcode: 92886
  },
  {
    Id: 16,
    gym_name: '24 Hour Fitness',
    zipcode: 90620
  },
  {
    Id: 17,
    gym_name: '24 Hour Fitness',
    zipcode:90720
  },
  {
    Id: 18,
    gym_name: '24 Hour Fitness',
    zipcode:92602
  },
  {
    Id: 19,
    gym_name: '24 Hour Fitness',
    zipcode:92618
  },
  {
    Id: 20,
    gym_name: '24 Hour Fitness',
    zipcode:92626
  },
  {
    Id: 21,
    gym_name: '24 Hour Fitness',
    zipcode:92627
  },
  {
    Id: 22,
    gym_name: '24 Hour Fitness',
    zipcode:92630
  },
  {
    Id: 59,
    gym_name: '24 Hour Fitness',
    zipcode:92646
  },
  {
    Id: 23,
    gym_name: '24 Hour Fitness',
    zipcode:92647
  },
  {
    Id: 24,
    gym_name: '24 Hour Fitness',
    zipcode:92649
  },
  {
    Id: 25,
    gym_name: '24 Hour Fitness',
    zipcode:92675
  },
  {
    Id: 26,
    gym_name: '24 Hour Fitness',
    zipcode:92677
  },
  {
    Id: 27,
    gym_name: '24 Hour Fitness',
    zipcode:92688
  },
  {
    Id: 28,
    gym_name: '24 Hour Fitness',
    zipcode:92691
  },
  {
    Id: 29,
    gym_name: '24 Hour Fitness',
    zipcode:92694
  },
  {
    Id: 30,
    gym_name: '24 Hour Fitness',
    zipcode:92704
  },
  {
    Id: 31,
    gym_name: '24 Hour Fitness',
    zipcode:92705
  },
  {
    Id: 32,
    gym_name: '24 Hour Fitness',
    zipcode:92708
  },
  {
    Id: 33,
    gym_name: '24 Hour Fitness',
    zipcode:92801
  },
  {
    Id: 34,
    gym_name: '24 Hour Fitness',
    zipcode:92808
  },
  {
    Id: 35,
    gym_name: '24 Hour Fitness',
    zipcode:92821
  },
  {
    Id: 36,
    gym_name: '24 Hour Fitness',
    zipcode:92835
  },{
    Id: 37,
    gym_name: '24 Hour Fitness',
    zipcode:92841
  },
  {
    Id: 38,
    gym_name: '24 Hour Fitness',
    zipcode:92865
  },
  {
    Id: 39,
    gym_name: '24 Hour Fitness',
    zipcode:92868
  },
  {
    Id: 40,
    gym_name: '24 Hour Fitness',
    zipcode:92869
  },
  {
    Id: 41,
    gym_name: '24 Hour Fitness',
    zipcode:92886
  },
  {
    Id: 42,
    gym_name: 'EOS',
    zipcode:92694
  },
  {
    Id: 43,
    gym_name: 'EOS',
    zipcode:92705
  },
  {
    Id: 44,
    gym_name: 'Crunch',
    zipcode:92649
  },
  {
    Id: 45,
    gym_name: 'Crunch',
    zipcode:92708
  },
  {
    Id: 46,
    gym_name: 'Crunch',
    zipcode:92804
  },
  {
    Id: 47,
    gym_name: 'Golds',
    zipcode:92804
  },
  {
    Id: 48,
    gym_name: 'Planet Fitness',
    zipcode:90621
  },
  {
    Id: 49,
    gym_name: 'Planet Fitness',
    zipcode:90680
  },
  {
    Id: 50,
    gym_name: 'Planet Fitness',
    zipcode:92627
  },
  {
    Id: 51,
    gym_name: 'Planet Fitness',
    zipcode:92630
  },
  {
    Id: 52,
    gym_name: 'Planet Fitness',
    zipcode:92648
  },
  {
    Id: 53,
    gym_name: 'Planet Fitness',
    zipcode:92677
  },
  {
    Id: 54,
    gym_name: 'Planet Fitness',
    zipcode:92705
  },
  {
    Id: 55,
    gym_name: 'Planet Fitness',
    zipcode:92706
  },
  {
    Id: 56,
    gym_name: 'Planet Fitness',
    zipcode:92708
  },
  {
    Id: 57,
    gym_name: 'Planet Fitness',
    zipcode:92782
  },
  {
    Id: 58,
    gym_name: 'Planet Fitness',
    zipcode:92802
  }


];
const seedGyms = () => Gym.bulkCreate(gymData);
module.exports= seedGyms;