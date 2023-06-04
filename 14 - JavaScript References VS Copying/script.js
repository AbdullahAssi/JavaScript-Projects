    // start with strings, numbers and booleans
    let age = 100;
    let age2 = age;
    console.log(age, age2);
    age = 200;
    console.log(age, age2);
    let name = 'Abdullah';
    let name2 = name;
    console.log(name, name2);
    name = 'Sultan';
    console.log(name, name2);

    // Let's say we have an array
    const players = ['Abdullah', 'Sultan', 'Mehdi', 'Moeez'];

    // and we want to make a copy of it.
    const team = players;
    team[3] = 'Hassan';
    console.log(players,team);

    // You might think we can just do something like this:
    // however what happens when we update that array?
    team.push('Hamza');
    console.log(players,team);


    // now here is the problem!

    // Why? It's because that is an array reference, not an array copy. They both point to the same array!

    // So, how do we fix this? We take a copy instead!

    const team2 = players.slice(2,3);
    console.log(team2);
    //copy is sliced but not the original array

    console.log(players);

    team2[1] = 'Zohaib';
    team2.push('Wahab');
    console.log(team2);
    console.log(players);
    // one way

    // or create a new array and concat the old one in
    const team3 = [].concat(players);
    console.log(team3);
    // or use the new ES6 Spread
    const team4 = [...players];
    team4[3] = 'Moeez';
    console.log(team4);
    // now when we update it, the original one isn't changed

    // The same thing goes for objects, let's say we have a person object

    // with Objects
    const person = {
        name: 'Abdullah',
        age: 19
    };

    // and think we make a copy:
    const captain = person;
    captain.number = 99;

    // how do we take a copy instead?
    const cap2 = Object.assign({}, person, {number: 99, age: 12}); //overwirting age
    console.log(cap2);

    // We will hopefully soon see the object ...spread
    const cap3 = {...person};
    console.log(cap3);
    // Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

    const abdullah = {
        name: 'Abdullah',
        age: 19,
        social: {
            twitter: '@abdullah',
            facebook: 'abdullah.ch'
        }
    };
    console.log(abdullah);

    const dev = Object.assign({}, abdullah);
    console.log(dev);
    abdullah.social.twitter = 'abdullahch225';
    console.log(dev);