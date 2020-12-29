const data = {
    books: [
        {
            _id:'1',
            name:'Book',
            category:'fiction',
            image: '/images/book1.jpg',
            rating: 4.5,
            stock:2,
            numReviews: 100,
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus imperdiet eros ac lectus tristique tempus. Quisque metus leo, ultricies sollicitudin diam sit amet, facilisis rhoncus leo. Fusce imperdiet erat ac felis facilisis, eu dictum ex pretium. In malesuada mauris quis magna dictum consequat. Sed dapibus tellus dolor, non tincidunt mauris aliquam in. Fusce auctor quam mi, iaculis lobortis nulla mattis vitae. Etiam a urna orci. Nam tincidunt viverra lectus id pretium.',
            review:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus imperdiet eros ac lectus tristique tempus. Quisque metus leo, ultricies sollicitudin diam sit amet, facilisis rhoncus leo. Fusce imperdiet erat ac felis facilisis, eu dictum ex pretium. In malesuada mauris quis magna dictum consequat. Sed dapibus tellus dolor, non tincidunt mauris aliquam in. Fusce auctor quam mi, iaculis lobortis nulla mattis vitae. Etiam a urna orci. Nam tincidunt viverra lectus id pretium.'
        },
        {
            _id:'2',
            name:'Book of wonder',
            category:'romance',
            image: '/images/book2.jpg',
            rating: 5,
            stock:2,
            numReviews: 1044,
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus imperdiet eros ac lectus tristique tempus. Quisque metus leo, ultricies sollicitudin diam sit amet, facilisis rhoncus leo. Fusce imperdiet erat ac felis facilisis, eu dictum ex pretium. In malesuada mauris quis magna dictum consequat. Sed dapibus tellus dolor, non tincidunt mauris aliquam in. Fusce auctor quam mi, iaculis lobortis nulla mattis vitae. Etiam a urna orci. Nam tincidunt viverra lectus id pretium.',
            review:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus imperdiet eros ac lectus tristique tempus. Quisque metus leo, ultricies sollicitudin diam sit amet, facilisis rhoncus leo. Fusce imperdiet erat ac felis facilisis, eu dictum ex pretium. In malesuada mauris quis magna dictum consequat. Sed dapibus tellus dolor, non tincidunt mauris aliquam in. Fusce auctor quam mi, iaculis lobortis nulla mattis vitae. Etiam a urna orci. Nam tincidunt viverra lectus id pretium.'
        },
        {
            _id:'3',
            name:'Book of guilt',
            category:'Adventure',
            image: '/images/book3.jpg',
            rating: 4,
            stock:2,
            numReviews: 1000,
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus imperdiet eros ac lectus tristique tempus. Quisque metus leo, ultricies sollicitudin diam sit amet, facilisis rhoncus leo. Fusce imperdiet erat ac felis facilisis, eu dictum ex pretium. In malesuada mauris quis magna dictum consequat. Sed dapibus tellus dolor, non tincidunt mauris aliquam in. Fusce auctor quam mi, iaculis lobortis nulla mattis vitae. Etiam a urna orci. Nam tincidunt viverra lectus id pretium.',
            review:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus imperdiet eros ac lectus tristique tempus. Quisque metus leo, ultricies sollicitudin diam sit amet, facilisis rhoncus leo. Fusce imperdiet erat ac felis facilisis, eu dictum ex pretium. In malesuada mauris quis magna dictum consequat. Sed dapibus tellus dolor, non tincidunt mauris aliquam in. Fusce auctor quam mi, iaculis lobortis nulla mattis vitae. Etiam a urna orci. Nam tincidunt viverra lectus id pretium.'
        },
        {
            _id:'4',
            name:'Book of magic',
            category:'Horror',
            image: '/images/book4.jpg',
            rating: 3.5,
            stock:2,
            numReviews: 800,
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus imperdiet eros ac lectus tristique tempus. Quisque metus leo, ultricies sollicitudin diam sit amet, facilisis rhoncus leo. Fusce imperdiet erat ac felis facilisis, eu dictum ex pretium. In malesuada mauris quis magna dictum consequat. Sed dapibus tellus dolor, non tincidunt mauris aliquam in. Fusce auctor quam mi, iaculis lobortis nulla mattis vitae. Etiam a urna orci. Nam tincidunt viverra lectus id pretium.',
            review:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus imperdiet eros ac lectus tristique tempus. Quisque metus leo, ultricies sollicitudin diam sit amet, facilisis rhoncus leo. Fusce imperdiet erat ac felis facilisis, eu dictum ex pretium. In malesuada mauris quis magna dictum consequat. Sed dapibus tellus dolor, non tincidunt mauris aliquam in. Fusce auctor quam mi, iaculis lobortis nulla mattis vitae. Etiam a urna orci. Nam tincidunt viverra lectus id pretium.'
        },
        {
            _id:'5',
            name:'Book of life',
            category:'fiction',
            image: '/images/book5.jpg',
            rating: 2.5,
            stock:2,
            numReviews: 1200,
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus imperdiet eros ac lectus tristique tempus. Quisque metus leo, ultricies sollicitudin diam sit amet, facilisis rhoncus leo. Fusce imperdiet erat ac felis facilisis, eu dictum ex pretium. In malesuada mauris quis magna dictum consequat. Sed dapibus tellus dolor, non tincidunt mauris aliquam in. Fusce auctor quam mi, iaculis lobortis nulla mattis vitae. Etiam a urna orci. Nam tincidunt viverra lectus id pretium.',
            review:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus imperdiet eros ac lectus tristique tempus. Quisque metus leo, ultricies sollicitudin diam sit amet, facilisis rhoncus leo. Fusce imperdiet erat ac felis facilisis, eu dictum ex pretium. In malesuada mauris quis magna dictum consequat. Sed dapibus tellus dolor, non tincidunt mauris aliquam in. Fusce auctor quam mi, iaculis lobortis nulla mattis vitae. Etiam a urna orci. Nam tincidunt viverra lectus id pretium.'
        },
        {
            _id:'6',
            name:'Book of power',
            category:'fiction',
            image: '/images/book6.jpg',
            rating: 4,
            stock:2,
            numReviews: 1005,
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus imperdiet eros ac lectus tristique tempus. Quisque metus leo, ultricies sollicitudin diam sit amet, facilisis rhoncus leo. Fusce imperdiet erat ac felis facilisis, eu dictum ex pretium. In malesuada mauris quis magna dictum consequat. Sed dapibus tellus dolor, non tincidunt mauris aliquam in. Fusce auctor quam mi, iaculis lobortis nulla mattis vitae. Etiam a urna orci. Nam tincidunt viverra lectus id pretium.',
            review:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus imperdiet eros ac lectus tristique tempus. Quisque metus leo, ultricies sollicitudin diam sit amet, facilisis rhoncus leo. Fusce imperdiet erat ac felis facilisis, eu dictum ex pretium. In malesuada mauris quis magna dictum consequat. Sed dapibus tellus dolor, non tincidunt mauris aliquam in. Fusce auctor quam mi, iaculis lobortis nulla mattis vitae. Etiam a urna orci. Nam tincidunt viverra lectus id pretium.'

        },
    ]
};

export default data;