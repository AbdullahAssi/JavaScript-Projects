const dogs = [{ name: 'Tomi', age: 2 }, { name: 'Moti', age: 8 }];

function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}

    // Regular
    console.log('hello');
    // Interpolated
    console.log('Hello I am a %s string!', 'tada');
    // Styled
    console.log('%c I am some great text', 'font-size:50px; background:red; text-shadow: 5px 6px 0 blue');
    // warning!
    console.warn('OH NOOO');
    // Error :|
    console.error('error nub fix this');
    // Info
    console.info('NUtech is a Great University');
    // Testing
    const p = document.querySelector('p');
    console.assert(p.classList.contains('ouch'), 'That is wrong!');
    // clearing
    // console.clear();
    // Viewing DOM Elements
    console.log(p);
    // Grouping together
    dogs.forEach(dog => {
        console.groupCollapsed(`${dog.name}`);
        console.log(`This is ${dog.name}`);
        console.log(`${dog.name} is ${dog.age} years old`);
        console.log(`${dog.name} is ${dog.age * 7} dog years old`);
        console.groupEnd(`${dog.name}`);
    });
    console.table(dogs)
    // counting

    console.count('Noob');
    console.count('NUb')
    // timing
    console.time('fetching data');
    fetch('https://api.github.com/users/wesbos')
        .then(data => data.json())
        .then(data => {
            console.timeEnd('fetching data');
            console.log(data);
        }
    );

