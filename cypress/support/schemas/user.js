import spok from 'cy-spok'

export const schemaGet = spok({
  body: {
    current_page: spok.number,
    data: [
      {
        id: spok.string,
        first_name: spok.string,
        last_name: spok.string,
        address: spok.string,
        city: spok.string,
        state: spok.notDefined,
        country: spok.string,
        postcode: spok.notDefined,
        phone: spok.notDefined,
        dob: spok.string,
        email: spok.string,
        failed_login_attempts: spok.number,
        created_at: spok.string
      }
    ]
  }
})