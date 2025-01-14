const address = 'hobigonj';
const part = address.slice(2, 5);
console.log(part)

const sentence = 'i am a good and hardworking person';
console.log(sentence.split(''));
console.log(sentence.split('a'));

const friendsStr = 'salman, emon, jobber, sanam, arman, samaun';
const friends = friendsStr.split(',')
console.log(friends)

const realFriends =['salman', 'emon', 'jobber', 'sanam', 'arman', 'samaun'];
console.log(realFriends)
console.log(realFriends.join())
console.log(realFriends.join('|'))
console.log(realFriends.join('-'))