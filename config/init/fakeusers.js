module.exports.init = async () => {
  try {
    for (let i = 0; i < 100; i ++) {
      User.create({
        username: `user${i}`,
        email: `user${i}@gmail.com`,
        firstName: '王',
        lastName: '大明'
      }).then(function(user) {
        Passport.create({
          provider: 'local',
          password: 'passport',
          UserId: user.id
        });
      });
      Slogan.create({
        content: '123',
        source: '123'
      });
    }
  } catch (e) {
    console.error(e);
  }
};
