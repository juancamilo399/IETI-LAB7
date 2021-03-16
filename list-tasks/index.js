var handler = require('../App');
module.exports = async function (context, req) {
    context.log('Get the tasks to the planner');

    const responseMessage = { response: handler.get() };

    context.res = {
        status: 200,
        body: responseMessage
    };
}