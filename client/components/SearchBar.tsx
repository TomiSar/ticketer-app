import { Search } from 'lucide-react';
import Form from 'next/form';

function SearchBar() {
  return (
    <div className='w-full max-w-4xl mx-auto'>
      <Form className='relative' action='/search'>
        <input
          className='w-full py-3 px-4 pl-12 bg-white rounded-xl border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200'
          type='text'
          placeholder='Search for events...'
          name='q' // query
        />
        <Search className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5' />
        <button
          className='absolute right-3 top-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1.5 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200'
          type='submit'
        >
          Search
        </button>
      </Form>
    </div>
  );
}

export default SearchBar;
