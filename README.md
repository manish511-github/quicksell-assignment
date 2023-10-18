# Kanban Board React App

Welcome to my Kanban Board React App repository! The goal of this application is to interact with the provided API and display the data in a dynamic Kanban board format based on user preferences. When a user clicks the "display" button and selects a grouping or ordering option, the Kanban board should dynamically adjust to reflect the user's choice.

### Grouping Options

The application offers three distinct ways to group the data:

1. **By Status**: Group tickets based on their current status.
![](./screenshots/group_by_status.png)
2. **By User**: Arrange tickets according to the assigned user.
![](./screenshots/group_by_users.png)
1. **By Priority**: Group tickets based on their priority level.
![](./screenshots/group_by_priority.png)

### Ordering Options

Users can also sort the displayed tickets in two ways:

1. **Priority**: Arrange tickets in descending order of priority.
![](./screenshots/order_by_priority.png)
1. **Title**: Sort tickets in ascending order based on their title.
![](./screenshots/order_by_title.png)

### Visual Design

The Kanban board is responsive and visually appealing, with a design similar to the provided screenshots.

### Priority Levels

The priority levels for the tickets are as follows:

- Urgent (Priority level 4)
- High (Priority level 3)
- Medium (Priority level 2)
- Low (Priority level 1)
- No priority (Priority level 0)


### Persistence

Additionally, I ensured that the application saves the user's view state even after a page reload.

### Assets

For icons, I used icons from various sources, including Google and other libraries.

### Restrictions

I followed the provided guidelines strictly:

1. I didn't use CSS libraries like Tailwind, Vite, Material UI, Chakra, etc.
2. I didn't use Next.js or similar frameworks. I coded the application in pure ReactJS.

## Getting Started

If you'd like to run the Kanban Board React App locally, here's what you need to do:

1. Clone this repository to your local machine.

```bash
git clone https://github.com/astromanish/quicksell.git
```

2. Navigate to the project directory.

```bash
cd quicksell
```

3. Install the project dependencies.

```bash
npm install
```

4. Start the development server.

```bash
npm start
```

5. Open your web browser and visit [http://localhost:3000](http://localhost:3000) to access the Kanban board application.


