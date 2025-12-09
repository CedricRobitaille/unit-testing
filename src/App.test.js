import { render, screen, fireEvent, cleanup} from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';

afterEach(cleanup)

test('Render Navigation', () => {
  const app = render(<App />);
  const linkElement = app.getByRole('navigation');
  expect(linkElement).toBeInTheDocument();
});





test('User flow to create new task (Page Nav -> Input Text -> Submit Form -> Page Nav -> Todo Created', async () => {
  const todoText = "Example todo"

  const app = render(<App />)
  const navButton = app.getByText("create")

  fireEvent.click(navButton);
  // Confirm Page Redirect
  const newTodoHeader = app.getByText("Create a new todo");
  expect(newTodoHeader).toBeInTheDocument();

  const formInput = app.getByRole('textbox', { name: /todo name/i })
  await userEvent.type(formInput, todoText)
  // Confirm Input Change on Type
  expect(formInput).toHaveValue(todoText);

  const formElement = app.getByRole('form', { name: /create form/i })
  fireEvent.submit(formElement);

  // Confirm Page Redirect
  const todoListHeader = app.getByText("Your todos");
  expect(todoListHeader).toBeInTheDocument()

  // Confirm Todo Element Created
  const todoElement = app.getByRole('textbox', { name: /todo-0/i })
  expect(todoElement).toHaveValue(todoText);


  // //! Additional Testing for multiple todo creations
  // fireEvent.click(navButton);

  // const newFormInput = app.getByRole('textbox', { name: /todo name/i })
  // await userEvent.type(newFormInput, `${todoText} 2`)

  // const newFormElement = app.getByRole('form', { name: /create form/i })
  // fireEvent.submit(newFormElement);

  // // Original Todo still exists
  // const prevTodoElement = app.getByRole('textbox', { name: /todo-0/i })
  // expect(prevTodoElement).toHaveValue(todoText);

  // // New Todo was added
  // const newTodoElement = app.getByRole('textbox', { name: /todo-1/i })
  // expect(newTodoElement).toHaveValue(`${todoText} 2`)
  
})


test('Edit todo element to change value', async () => {
  const todoText = "Example todo"

  const app = render(<App />)
  const navButton = app.getByText("create")

  fireEvent.click(navButton);
  // Confirm Page Redirect
  const newTodoHeader = app.getByText("Create a new todo");
  expect(newTodoHeader).toBeInTheDocument();

  const formInput = app.getByRole('textbox', { name: /todo name/i })
  await userEvent.type(formInput, todoText)
  // Confirm Input Change on Type
  expect(formInput).toHaveValue(todoText);

  const formElement = app.getByRole('form', { name: /create form/i })
  fireEvent.submit(formElement);

  // Confirm Todo Element Created
  const todoElement = app.getByRole('textbox', { name: /todo-0/i })
  await userEvent.clear(todoElement);
  expect(todoElement).toHaveValue("");
})