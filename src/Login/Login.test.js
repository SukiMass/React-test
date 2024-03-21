import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Login from "./Login";
import Api from "../Api/Api";

jest.mock('axios',()=>({
    __esModule:true,

    default:{
        get:()=>({
            data:{id:1, name:"John"}
        })
    }
}))

test('username field',()=>{
    render(<Login/>)
    const userInput = screen.getByPlaceholderText(/username/i)
    expect(userInput).toBeInTheDocument();  
})

test('password field',()=>{
    render(<Login/>)
    const userpassword = screen.getByPlaceholderText(/password/i)
    expect(userpassword).toBeInTheDocument();
})

test('Button field',()=>{
    render(<Login/>)
    const button = screen.getByRole(/button/i)
    expect(button).toBeInTheDocument();  
})

test('username empty',()=>{
    render(<Login/>)
    const userInput = screen.getByPlaceholderText(/username/i)
    expect(userInput.value).toBe("");  
})

test('password empty',()=>{
    render(<Login/>)
    const userpassword = screen.getByPlaceholderText(/password/i)
    expect(userpassword.value).toBe("");
})

test('Button should be disabled',()=>{
    render(<Login/>)
    const button = screen.getByRole(/button/i)
    expect(button).toBeDisabled();
})

test('Loading should not be rendered',()=>{
    render(<Login/>)
    const button = screen.getByRole(/button/i)
    expect(button).not.toHaveTextContent(/please Wait/i);
})

test('Error Message should not be visible',()=>{
    render(<Login/>)
    const error = screen.getByTestId("error")
    expect(error).not.toBeVisible();
})  

test('Username should be Change',()=>{
    render(<Login/>)
    const userInput = screen.getByPlaceholderText(/username/i)
    const testValue = 'test'

    fireEvent.change(userInput,{target : {value : testValue}})
    expect(userInput.value).toBe(testValue)
}) 

test('Password should be Change',()=>{
    render(<Login/>)
    const userPass = screen.getByPlaceholderText(/password/i)
    const testValue = 'test'
    
    fireEvent.change(userPass,{target : {value : testValue}})
    expect(userPass.value).toBe(testValue)
})  

test('Button should not be disabled when inputs exist',()=>{
    render(<Login/>)
    const button = screen.getByRole(/button/i)
    const userInput = screen.getByPlaceholderText(/username/i)
    const userPass = screen.getByPlaceholderText(/password/i)

    const testValue = 'test'

    fireEvent.change(userInput,{target : {value : testValue}})
    fireEvent.change(userPass,{target : {value : testValue}})

    expect(button).not.toBeDisabled();  
})

test('Loading should be rendered when click',async()=>{
    render(<Login/>)
    const button = screen.getByRole(/button/i)
    const userInput = screen.getByPlaceholderText(/username/i)
    const userPass = screen.getByPlaceholderText(/password/i)

    const testValue = 'test'
    fireEvent.change(userInput,{target : {value : testValue}})
    fireEvent.change(userPass,{target : {value : testValue}})
    fireEvent.click(button);
    
    await waitFor(()=>expect(button).toHaveTextContent(/please wait/i))
})

test('Loading should not be rendered after fetching',async()=>{
    render(<Login/>)
    const button = screen.getByRole("button")
    const userInput = screen.getByPlaceholderText(/username/i)
    const userPass = screen.getByPlaceholderText(/password/i)

    const testValue = 'test'

    fireEvent.change(userInput,{target : {value : testValue}})
    fireEvent.change(userPass,{target : {value : testValue}})
    fireEvent.click(button);

    await waitFor(()=>expect(button).not.toHaveTextContent(/please Wait/i))
})

test('User should be rendered after fetching',async()=>{
    render(<Login/>)
    const button = screen.getByRole("button")
    const userInput = screen.getByPlaceholderText(/username/i)
    const userPass = screen.getByPlaceholderText(/password/i)

    const testValue = 'test'

    fireEvent.change(userInput,{target : {value : testValue}});
    fireEvent.change(userPass,{target : {value : testValue}});
    fireEvent.click(button);

    const userItem = await screen.findByText('John');
    expect(userItem).toBeInTheDocument();
})

describe("Demonstrating some useNavigate() tests ", () => {
    it("Renders the About component", () => {
        render(<Login />);
    const button = screen.getByRole("Navigate")
      fireEvent.click(button);
      const button1 = getByText(/Api/i);
      expect(button1).toBeInTheDocument();
    });
  });







