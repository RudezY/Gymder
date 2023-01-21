const { Gym } = require('../models');
const gymData = [
  {
    gymMembershipId: 1,
    gym_name: 'La Fitness',
    zipcode: 90631
  },

  {
    gymMembershipId: 2,
    gym_name: 'La Fitness',
    zipcode: 92606
  },

  {
    gymMembershipId: 3,
    gym_name: 'La Fitness',
    zipcode: 92610
  },
  {
    gymMembershipId: 4,
    gym_name: 'La Fitness',
    zipcode: 92612
  },
  {
    gymMembershipId: 5,
    gym_name: 'La Fitness',
    zipcode: 92620
  },
  {
    gymMembershipId: 6,
    gym_name: 'La Fitness',
    zipcode: 92630
  },
  {
    gymMembershipId: 7,
    gym_name: 'La Fitness',
    zipcode: 92648
  },
  {
    gymMembershipId: 8,
    gym_name: 'La Fitness',
    zipcode: 92691
  },
  {
    gymMembershipId: 9,
    gym_name: 'La Fitness',
    zipcode: 92704
  },
  {
    gymMembershipId: 10,
    gym_name: 'La Fitness',
    zipcode: 92705
  },
  {
    gymMembershipId: 11,
    gym_name: 'La Fitness',
    zipcode: 92708
  },
  {
    gymMembershipId: 12,
    gym_name: 'La Fitness',
    zipcode: 92807
  },
  {
    gymMembershipId: 13,
    gym_name: 'La Fitness',
    zipcode: 92845
  },
  {
    gymMembershipId: 14,
    gym_name: 'La Fitness',
    zipcode: 92868
  },
  {
    gymMembershipId: 15,
    gym_name: 'La Fitness',
    zipcode: 92886
  },
  {
    gymMembershipId: 16,
    gym_name: '24 Hour Fitness',
    zipcode: 90620
  },
  {
    gymMembershipId: 17,
    gym_name: '24 Hour Fitness',
    zipcode:90720
  },
  {
    gymMembershipId: 18,
    gym_name: '24 Hour Fitness',
    zipcode:92602
  },
  {
    gymMembershipId: 19,
    gym_name: '24 Hour Fitness',
    zipcode:92618
  },
  {
    gymMembershipId: 20,
    gym_name: '24 Hour Fitness',
    zipcode:92626
  },
  {
    gymMembershipId: 21,
    gym_name: '24 Hour Fitness',
    zipcode:92627
  },
  {
    gymMembershipId: 22,
    gym_name: '24 Hour Fitness',
    zipcode:92630
  },
  {
    gymMembershipId: 59,
    gym_name: '24 Hour Fitness',
    zipcode:92646
  },
  {
    gymMembershipId: 23,
    gym_name: '24 Hour Fitness',
    zipcode:92647
  },
  {
    gymMembershipId: 24,
    gym_name: '24 Hour Fitness',
    zipcode:92649
  },
  {
    gymMembershipId: 25,
    gym_name: '24 Hour Fitness',
    zipcode:92675
  },
  {
    gymMembershipId: 26,
    gym_name: '24 Hour Fitness',
    zipcode:92677
  },
  {
    gymMembershipId: 27,
    gym_name: '24 Hour Fitness',
    zipcode:92688
  },
  {
    gymMembershipId: 28,
    gym_name: '24 Hour Fitness',
    zipcode:92691
  },
  {
    gymMembershipId: 29,
    gym_name: '24 Hour Fitness',
    zipcode:92694
  },
  {
    gymMembershipId: 30,
    gym_name: '24 Hour Fitness',
    zipcode:92704
  },
  {
    gymMembershipId: 31,
    gym_name: '24 Hour Fitness',
    zipcode:92705
  },
  {
    gymMembershipId: 32,
    gym_name: '24 Hour Fitness',
    zipcode:92708
  },
  {
    gymMembershipId: 33,
    gym_name: '24 Hour Fitness',
    zipcode:92801
  },
  {
    gymMembershipId: 34,
    gym_name: '24 Hour Fitness',
    zipcode:92808
  },
  {
    gymMembershipId: 35,
    gym_name: '24 Hour Fitness',
    zipcode:92821
  },
  {
    gymMembershipId: 36,
    gym_name: '24 Hour Fitness',
    zipcode:92835
  },{
    gymMembershipId: 37,
    gym_name: '24 Hour Fitness',
    zipcode:92841
  },
  {
    gymMembershipId: 38,
    gym_name: '24 Hour Fitness',
    zipcode:92865
  },
  {
    gymMembershipId: 39,
    gym_name: '24 Hour Fitness',
    zipcode:92868
  },
  {
    gymMembershipId: 40,
    gym_name: '24 Hour Fitness',
    zipcode:92869
  },
  {
    gymMembershipId: 41,
    gym_name: '24 Hour Fitness',
    zipcode:92886
  },
  {
    gymMembershipId: 42,
    gym_name: 'EOS',
    zipcode:92694
  },
  {
    gymMembershipId: 43,
    gym_name: 'EOS',
    zipcode:92705
  },
  {
    gymMembershipId: 44,
    gym_name: 'Crunch',
    zipcode:92649
  },
  {
    gymMembershipId: 45,
    gym_name: 'Crunch',
    zipcode:92708
  },
  {
    gymMembershipId: 46,
    gym_name: 'Crunch',
    zipcode:92804
  },
  {
    gymMembershipId: 47,
    gym_name: 'Golds',
    zipcode:92804
  },
  {
    gymMembershipId: 48,
    gym_name: 'Planet Fitness',
    zipcode:90621
  },
  {
    gymMembershipId: 49,
    gym_name: 'Planet Fitness',
    zipcode:90680
  },
  {
    gymMembershipId: 50,
    gym_name: 'Planet Fitness',
    zipcode:92627
  },
  {
    gymMembershipId: 51,
    gym_name: 'Planet Fitness',
    zipcode:92630
  },
  {
    gymMembershipId: 52,
    gym_name: 'Planet Fitness',
    zipcode:92648
  },
  {
    gymMembershipId: 53,
    gym_name: 'Planet Fitness',
    zipcode:92677
  },
  {
    gymMembershipId: 54,
    gym_name: 'Planet Fitness',
    zipcode:92705
  },
  {
    gymMembershipId: 55,
    gym_name: 'Planet Fitness',
    zipcode:92706
  },
  {
    gymMembershipId: 56,
    gym_name: 'Planet Fitness',
    zipcode:92708
  },
  {
    gymMembershipId: 57,
    gym_name: 'Planet Fitness',
    zipcode:92782
  },
  {
    gymMembershipId: 58,
    gym_name: 'Planet Fitness',
    zipcode:92802
  }


];
const seedGyms = () => Gym.bulkCreate(gymData);
module.exports= seedGyms;