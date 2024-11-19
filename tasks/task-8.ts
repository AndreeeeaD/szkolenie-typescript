// napisz przeciężenie funkcji handleTask, które 
// przyjmuje status zadania i zwraca string jeśli status jest 'new' lub 'in progress'
// lub zwraca void jeśli status jest 'done'

function handleTask(status: 'new' | 'in progress'): string;
function handleTask(status: 'done'): void;

function handleTask(status: 'new' | 'in progress' | 'done'): string | void {
  if (status === 'new' || status === 'in progress') {
    return 'Task is in progress';
  }
  return;
}
