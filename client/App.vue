<template>
<div>
    <center>
        <h1>
            Facebook login
        </h1>
    </center>
    <button @click="login">Login</button>
</div>
</template>

<script>
export default {
    name: 'App',

    methods: {
        login(e) {
            {
                console.log('e:' + e);
                e.preventDefault();
                console.log('e++' + e.preventDefault());
                Meteor.loginWithFacebook({
                    requestPermissions: ['public_profile', 'email']
                }, function (err) {
                    if (err) {
                        console.log('Handle errors here: ', err);
                    }
                });
            }
        }
    }
}
</script>
