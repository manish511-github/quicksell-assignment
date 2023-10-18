
const priorityNames = {
    0: 'No Priority',
    1: 'Low',
    2: 'Medium',
    3: 'High',
    4: 'Urgent'
}

export function fetchTickets() {
    return new Promise(async (resolve, reject) => {
        let user = {};
        let priority = {};
        let status = {};
        let userHeader = {};
        let statusHeader = {};
        let priorityHeader = {};
        
        try {
            let res = await fetch("https://api.quicksell.co/v1/internal/frontend-assignment");
            const d = await res.json();
            const tickets = d.tickets
            const users = d.users;
            tickets.forEach(ticket => {
                user[ticket.userId] = [];
                priority[ticket.priority] = [];
                status[ticket.status] = [];
            });
            users.forEach(user => {
                userHeader[user.id] = user;
            })
            tickets.forEach(ticket => {
                user[ticket.userId].push(ticket);
                priority[ticket.priority].push(ticket);
                status[ticket.status].push(ticket);
                statusHeader[ticket.status] = { name: ticket.status }
                priorityHeader[ticket.priority] = { name: priorityNames[ticket.priority] }
            })
            resolve({ user, status, priority, userHeader, statusHeader, priorityHeader })
        } catch (e) {
            reject(e)
        }
    })
}