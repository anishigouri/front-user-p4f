import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../../actions/ClientAction';
import './posts.scss';

export default function Posts() {
  const client = useSelector((state) => state.clientReducer.selectClient);
  const result = useSelector((state) => state.clientReducer.fetchPosts);

  const dispatch = useDispatch();
  const fetchPostsAction = (clientId) => dispatch(fetchPosts(clientId));

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (client) {
      fetchPostsAction(client.id);
    }
  }, [client]);

  useEffect(() => {
    if (result) {
      setPosts(result);
    }
  }, [result]);

  return (
    <div className="Posts-main">
      {
        posts.map((post) => (
          <div key={post.id} className="Posts-content">
            <p className="Posts-title">{ post.title }</p>
            <p className="Posts-body">{ post.body }</p>
          </div>
        ))
      }
    </div>
  );
}
