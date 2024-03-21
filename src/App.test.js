import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

// test('Unit Testing', () => {
//   render(<App />);
//   const text = screen.getByText(/First React test case/i);
//   // const title = screen.getByTitle('Nature Image')
//   expect(text).toBeInTheDocument();
//   // expect(title) .toBeInTheDocument();
// });

// test('Input Field test', () => {
//   render(<App />)
//   let checkInput = screen.getByRole('username');
//   let checkpass = screen.getByRole('password');
//   let checkInputPlaceholer = screen.getByPlaceholderText('Enter User Name');
//   expect(checkInput).toHaveAttribute('id', 'userId')
//   expect(checkpass).toHaveAttribute('id', 'password')
//   expect(checkInput).toBeInTheDocument();
//   expect(checkInputPlaceholer).toBeInTheDocument();
//   expect(checkInput).toHaveAttribute('name', 'username');
//   expect(checkInput).toHaveAttribute('id', 'userId');
//   expect(checkInput).toHaveAttribute('type', 'text');
//   expect(checkInput).toHaveAttribute('value', "suresh");
// })

test('Test Onchange Event', () => {
  // render(<App />)
  
})  
// describe('Ui test Case group', () => {

//   test('test 1', () => {
//     render(<App />)
//     let checkInput = screen.getByRole('textbox');
//     expect(checkInput).toHaveAttribute('id', 'userId')
//   })

//   test('test 2', () => {
//     render(<App />)
//     let checkInput = screen.getByRole('textbox');
//     expect(checkInput).toHaveAttribute('id', 'userId')
//   })

//   test('test 3', () => {
//     render(<App />)
//     let checkInput = screen.getByRole('textbox');
//     expect(checkInput).toHaveAttribute('id', 'userId')
//   })
// })
// It is used to group test cases if it is comes under single testing component or group
// In this skip and only used to control the running test cases.
// describe.skip('Api test Case group', () => {

//   test('test 1', () => {
//     render(<App />)
//     let checkInput = screen.getByRole('textbox');
//     expect(checkInput).toHaveAttribute('id', 'userId')
//   })

//   test('test 2', () => {
//     render(<App />)
//     let checkInput = screen.getByRole('textbox');
//     expect(checkInput).toHaveAttribute('id', 'userId')
//   })

//   test('test 3', () => {
//     render(<App />)
//     let checkInput = screen.getByRole('textbox');
//     expect(checkInput).toHaveAttribute('id', 'userId')
//   })

//   describe('Inner Describe group',()=>{
//     test('test 3', () => {
//       render(<App />)
//       let checkInput = screen.getByRole('textbox');
//       expect(checkInput).toHaveAttribute('id', 'userId')
//     })
//   })
// })