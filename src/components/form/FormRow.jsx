import FormInput from './FormInput';
import Button from '../control/Button';
import { useActionState, useReducer } from 'react';
import { formReducer, initialState } from '../../reducer/formReducer';
import { ACTION_TYPES } from '../../constants/actionTypes';
import { useData } from '../../hooks/useData';

export default function FormRow() {
  const [formState, dispatch] = useReducer(formReducer, initialState);
  const { name, price, quantity, total } = formState;

  const { addItem } = useData();

  const [_, formAction] = useActionState(() => {
    addItem({ ...formState, id: crypto.randomUUID() });
    dispatch({ type: ACTION_TYPES.RESET });
  });

  const handleChange = (event) => {
    const { name, value, type } = event.target;
    dispatch({
      type: ACTION_TYPES.SET_FIELD,
      payload: { name, value, type },
    });
  };

  return (
    <form action={formAction} className="flex flex-col md:flex-row bg-white border border-gray-300 p-5 md:gap-3 rounded-t-lg justify-between">
      <div className="md:flex gap-2 grid grid-cols-2">
        <FormInput title="品名" name="name" type="text" value={name} onChange={handleChange} required />
        <FormInput title="單價" name="price" type="number" value={price} onChange={handleChange} step="1" />
        <FormInput title="數量" name="quantity" type="number" value={quantity} onChange={handleChange} min={1} step="1" />

        <div className="flex gap-2 items-center">
          <span className="text-nowrap">總額</span>
          <span className="text-nowrap">{total}</span>
        </div>
      </div>

      <Button className="bg-green-600 mt-3 md:mt-0" type="submit">
        新增
      </Button>
    </form>
  );
}
