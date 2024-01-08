<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

// Define reactive variables for the form inputs
const publicKey = ref('');
const privateKey = ref('');
const address = ref('');
const sendingToAddress = ref('');
const count = ref(0);
const amount = ref(0);

// Function to handle the form submission
const sendFormData = () => {
  // Create JSON data from form inputs
  const formData = {
    publicKey: publicKey.value,
    privateKey: privateKey.value,
    address: address.value,
    sendingToAddress: sendingToAddress.value,
    amount: amount.value,
    count: count.value,
  };

  // TODO: Make API call with formData
  // Example: axios.post('/api/endpoint', formData).then(response => {...});
};
</script>

<template>
  <div class="dark-mode">
    <header>
      <img alt="Vue logo" class="logo" src="@/assets/logo.png" width="auto" height="125" />
      <h2 class="title">CL Wallet</h2>
      <div class="wrapper">
        <nav class="nav">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </nav>
      </div>
    </header>

    <main>
      <form @submit.prevent="sendFormData">
        <!-- Display count at the top -->
        <div class="count">Current Count: {{ count }}</div>
        <button type="button" id="reload">Reload Wallet</button>
        <!-- Form inputs -->
        <label for="publicKey">Public Key:</label>
        <input v-model="publicKey" type="text" id="publicKey" />

        <label for="privateKey">Private Key:</label>
        <input v-model="privateKey" type="text" id="privateKey" />

        <label for="address">Your Address:</label>
        <input v-model="address" type="text" id="address" />
        
        <div class="submit-container">
          <h2 class="title">Send Crypto</h2>
          <label for="amount">Amount:</label>
          <input v-model="amount" type="text" id="amount" />

          <label for="sendingToAddress">Send To Address:</label>
          <input v-model="sendingToAddress" type="text" id="sendingToAddress" />

          <!-- Submit button -->
          <button type="submit">Send</button>
        </div>
        <!-- End of new container div -->
      </form>
    </main>
  </div>
</template>

<style scoped>
.dark-mode {
  background: linear-gradient(145deg, #262829, #3a3e40);
  color: #ffffff; /* Dark mode text color */
  font-family: 'Abel', sans-serif;
}

/* Your existing styles for header, logo, and nav */

main {
  padding: 1rem;
  margin: 1em;
}

.nav {
  display: flex;
  justify-content: center;
}
.title {
  color: rgb(185, 124, 124);
  text-align: center;
  font-family: 'Rubik Mono One', monospace;
}
.logo {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
form {
  display: flex;
  flex-direction: column;
}

label {
  margin-top: 1rem;
}

input {
  margin-top: 0.5rem;
  padding: 0.5rem;
}

.count {
  margin-top: 1rem;
}

/* Styles for the new container */
.submit-container {
  display: flex;
  flex-direction: column;
  background-color: #050505; /* Slightly lighter background color for the submit portion */
  padding: 1rem; /* Adjust padding as needed */
  border-radius: 8px; /* Optional: Add border radius for rounded corners */
  margin-top: 1rem; /* Optional: Adjust margin as needed */
  box-shadow: 5px 5px 13px #1f2121;
}

button {
  margin-top: 1rem;
  padding: 0.5rem;
  background: linear-gradient(145deg, #3a3e40, #27bb79);
  color: #08083b;
  cursor: pointer;
  border: none;
  border-radius: 15px;
  box-shadow:  5px 5px 13px #1f2121,
             -5px -5px 13px #353739;
  font-family: 'Rubik Mono One', monospace;

}

button:hover {
  background: linear-gradient(145deg, #27bb79, #3a3e40);
  color: rgb(241, 93, 7);
  font-family: 'Rubik Mono One', monospace;
}

button:active {
  transform: translateY(2px); /* Move the button down by 2 pixels when clicked */
}
</style>

