// GET REQUEST
function getTodos() {
axios({
    method:'get',
    url:'https://jsonplaceholder.typicode.com/todos?_limit=4'   
}).then((res)=>showOutput(res))
.catch((error)=>console.log(error))
}
  
  // POST REQUEST
  function addTodo() {
    axios.post('https://jsonplaceholder.typicode.com/todos?_limit=5',{
        title:'new todo',
        completed:false

    }).then((res)=>showOutput(res))
    .catch((error)=>console.log(error))
    }
    

  
  // PUT/PATCH REQUEST
  function updateTodo() {
    console.log('PUT/PATCH Request');
    axios.patch('https://jsonplaceholder.typicode.com/todos/3',{
        title:'Update todo',
        completed:true

    }).then((res)=>showOutput(res))
    .catch((error)=>console.log(error))
    }

  
  
  // DELETE REQUEST
  function removeTodo() {
    console.log('DELETE Request');
    axios.delete('https://jsonplaceholder.typicode.com/todos/1',{
        title:'Delete todo',
        completed:true

    }).then((res)=>showOutput(res))
    .catch((error)=>console.log(error))
    }

  
  
  // SIMULTANEOUS DATA
  function getData() {
    console.log('Simultaneous Request');
    axios.all([
        axios.get('https://jsonplaceholder.typicode.com/todos?_limit=2'),
        axios.get('https://jsonplaceholder.typicode.com/posts?_limit=1')

    ]).then((res)=>{
        console.log(res[0])
        console.log(res[1])
        showOutput(res[0])
    })
    .catch((error)=>console.log(error))
  }
  
  // CUSTOM HEADERS
  function customHeaders() {
    console.log('Custom Headers');
const  object = {
    header:{
        'content-type' : 'application/json',
        Authorization : 'sometoken'
    }
}

    axios.post('https://jsonplaceholder.typicode.com/todos?_limit=5',{
        title:'new todo',
        completed:false
    },object).then((res)=>showOutput(res))
    .catch((error)=>console.log(error))

  }
  
  // TRANSFORMING REQUESTS & RESPONSES
  function transformResponse() {
    console.log('Transform Response');
  }
  
  // ERROR HANDLING
  function errorHandling() {
    console.log('Error Handling');

    axios({
        method:'get',
        url:'https://jsonplaceholder.typicode.com/todoss?_limit=4'   
    }).then((res)=>showOutput(res))
    .catch((err)=>{
        if(err.response){
            console.log(err.response.data)
            console.log(err.response.status)
            
        }
    })
    
  }
  
  // CANCEL TOKEN
  function cancelToken() {
    console.log('Cancel Token');

  }
  
  // INTERCEPTING REQUESTS & RESPONSES

  axios.interceptors.request.use(config=>{
     console.log(`${config.method.toUpperCase()} request sent to${config.url} at ${new Date().getTime()}`)
     return config
  },
  error=>{
    return Promise.reject(error)
  })
  
//..why not call back config and why return config instead then
  // AXIOS INSTANCES
  
  // Show output in browser
  function showOutput(res) {
    document.getElementById('res').innerHTML = `
    <div class="card card-body mb-4">
      <h5>Status: ${res.status}</h5>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Headers
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.headers, null, 2)}</pre>
      </div>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Data
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.data, null, 2)}</pre>
      </div>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Config
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.config, null, 2)}</pre>
      </div>
    </div>
  `;
  }
  
  // Event listeners
  document.getElementById('get').addEventListener('click', getTodos);
  document.getElementById('post').addEventListener('click', addTodo);
  document.getElementById('update').addEventListener('click', updateTodo);
  document.getElementById('delete').addEventListener('click', removeTodo);
  document.getElementById('sim').addEventListener('click', getData);
  document.getElementById('headers').addEventListener('click', customHeaders);
  document
    .getElementById('transform')
    .addEventListener('click', transformResponse);
  document.getElementById('error').addEventListener('click', errorHandling);
  document.getElementById('cancel').addEventListener('click', cancelToken);