import React from "react";
import MySelect from './UI/select/MySelect';
import MyInput from './UI/Input/MyInput';

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
        <MyInput
          placeholder="Find post"
          value={filter.query}
          onChange={e => setFilter({...filter, query: e.target.value})} 
        />
        
        <MySelect  
          defaultValue='sort by'
          value={filter.sort}
          onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
          options={[
            {value: 'title', name: 'By name'},
            {value: 'body', name: 'By discription'}]} 
          ></MySelect>
      </div>
    );
};

export default PostFilter;