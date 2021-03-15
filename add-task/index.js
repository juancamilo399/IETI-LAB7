var id = 0;
var tasks = [];
module.exports = async function (context, req) {
    context.log('Adding a task to the planner');

    id = ++id;
    const task = req.body;
    task.id = id;
    
    if (!(task.description && task.responsible && task.status && task.dueDate)) {
        const responseMessage = { response: "Invalid task" };
        context.res = {
            status: 400,
            body: responseMessage
        };
    } else {
        tasks.push(task)
        const responseMessage = { response: task };
        context.res = {
            status: 201,
            body: responseMessage
        };
        console.log(tasks)
    }
    
}