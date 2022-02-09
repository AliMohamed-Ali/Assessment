const URL = 'https://assessment-edvora.herokuapp.com'


  useEffect(() => {
    axios.get(URL)
        .then(res => {
            console.log(res.data);
        })
}, []);