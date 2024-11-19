// napisz interfejs, który opisuje obiekt typu Task: 
// zawiera pole title typu string oraz pole isReady typu boolean, assignee typu string[]
// oraz status typu 'new' | 'in progress' | 'done'

interface Task {
  title: string;
  isReady: boolean;
  assignee: string[];
  status: 'new' | 'in progress' | 'done';
}

const task: Task = {
  title: 'Task',
  isReady: true,
  assignee: ['John Doe'],
  status: 'new'
}
