export const getRecipies = async () => {
    try {
      const response = await fetch(' https://api.edamam.com/api/recipes/v2', {
        method: 'GET',
        headers: {
            "Content-Type": "aplication/json"
        }
      })
      if (!response.ok) {
        console.log("something wrong with response")
      } 

      const data = await response.json()
      return data
    } catch (err) {
        console.log(err)
    }
}