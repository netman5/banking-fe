import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const CreateTransactionButton = () => {
  const navigate = useNavigate();
  return (
    <>
      <button type='button' className='btn btn-primary' style={{ 'display': 'flex', 'alignItems': 'center', 'gap': '10px' }}
              onClick={() => navigate('/transactions/new')}
            >
              <AiOutlinePlus />
              New transaction</button>
    </>
  )
}

export default CreateTransactionButton