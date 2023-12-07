function getUser(id) {
    if (typeof id !== 'number' || id < 0) {
        throw new Error('User id is not a number or has a negative value.');
    }

    return { id };
}

try {
    const user = getUser(-1);
    console.log(user);
} catch (error) {
    console.error(error.message);
}

function getUsers(ids) {
    if (!Array.isArray(ids)) {
        throw new Error('Some values are invalid.');
    }

    const users = [];

    for (const id of ids) {
        try {
            const user = getUser(id);
            users.push(user);
        } catch (error) {
            console.error(`Invalid user id ${id}: ${error.message}`);
        }
    }

    return users;
}


const userIds = [-1, 8, 5, 4, '9']; 
const users = getUsers(userIds);
console.log('Users:', users);
