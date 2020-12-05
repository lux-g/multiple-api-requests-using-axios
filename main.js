const dataoneDiv = document.querySelector('.data-one');
const datatwoDiv = document.querySelector('.data-two');


const getInfo = async () => {
    const urlOne = await axios.get('https://jsonplaceholder.typicode.com/users');
    const urlTwo = await axios.get('https://jsonplaceholder.typicode.com/posts');

    axios.all([urlOne, urlTwo])
        .then(axios.spread((users, posts) => {
            users.data.forEach(user => {
                const dataOne = document.createElement('div');
                dataOne.innerHTML = `
                <p>${user.name}</p>
                `;
                dataoneDiv.appendChild(dataOne);
            });

            posts.data.forEach(post => {
                const dataTwo = document.createElement('div');
                dataTwo.innerHTML = `
                <p>${post.title}</p>
                `;
                datatwoDiv.appendChild(dataTwo)
            });
        }));
};

getInfo();
