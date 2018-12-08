<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->

                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->
                    <form v-on:submit.prevent="formSubmitted = true" action="">
                        <!-- <div class="form-group">
                            <label for="">Full Name</label>
                            <input class="form-control" v-model="fullName" type="text">
                        </div> -->
                        <full-name v-model="fullName"></full-name>
                        <div class="form-group">
                            <label for="">Email</label>
                            <input class="form-control" v-model="email" type="text">
                        </div>
                        <div class="form-group">
                            <label for="">Password</label>
                            <input class="form-control" v-model="password" type="password">
                        </div>
                        <div class="form-group">
                            <label for="">Store in database?</label>
                            <label>
                                <input type="radio" v-model="storeInDatabase" value="yes"> Yes
                            </label>
                            <label>
                                <input type="radio" v-model="storeInDatabase" value="no"> No
                            </label>
                        </div>
                        <button class="btn btn-primary">Submit</button>
                    </form>

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                </div>
            </div>
        </form>
        <hr>
        <div v-if="formSubmitted" class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ fullName }}</p>
                        <p>Mail: {{ email }}</p>
                        <p>Password: {{ password }}</p>
                        <p>Store in Database?: {{ storeInDatabase }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import FullName from './components/FullName.vue';

    export default {
        data() {
            return {
                fullName: null,
                email: null,
                password: null,
                storeInDatabase: 'yes',
                formSubmitted: false
            }
        },
        components: {
            FullName
        }
    }
</script>

<style>
</style>
