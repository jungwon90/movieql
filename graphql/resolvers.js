
//resolves the Query
//basically programming how we are going to send the response to the user
const people = [
    {   
        id: 0,
        name: "Jungwon",
        age: 30,
        gender: "female"
    },
    {   
        id: 1,
        name: "Yusai",
        age: 43,
        gender: "male"
    },
    {   
        id: 2,
        name: "Danbi",
        age: 28,
        gender: "female"
    }
];

const getById = id => {
    const filterdPeople = people.filter(person => person.id === id);
    return filterdPeople[0];
}

const resolvers = {
    //write a resolvers for Query
    Query: {
        people: () => people,
        person: (_, {id}) => getById(id)
    },
};

export default resolvers;