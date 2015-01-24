module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            js: {
                files: ['js/*.js','views/js/*.js'],
                tasks: ['concat', 'uglify']
            },
            css: {
                files: ['css/*.css','views/css/*.css'],
                tasks: ['autoprefixer']
            },
            html: {
                files: ['/*.html','views/*.html'],
                tasks: ['copy']
            }
        },
        concat: {
            main: {
                src: [
                    'js/*.js'
                ],
                dest: 'build/js/perfmatters.js'
            },
            views: {
                src: [
                    'views/js/*.js'
                ],
                dest: 'build/views/js/main.js'
            }
        },
        uglify: {
            main: {
                src: 'build/js/perfmatters.js',
                dest: 'build/js/perfmatters.min.js'
            },
            views: {
                src: 'build/views/js/main.js',
                dest: 'build/views/js/main.min.js'
            }
        },
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'img/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'build/img/'
                },
                {
                    expand: true,
                    cwd: 'views/images/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'build/views/images/'
                }]
            }
        },
        autoprefixer : {
            main: {
                expand: true,
                flatten: true,
                src: 'css/*.css',
                dest: 'build/css/'   
            },
            views: {
                expand: true,
                flatten: true,
                src: 'views/css/*.css',
                dest: 'build/views/css/'   
            }
            
        },
        copy: {
            main: {
                src: '*.html',
                dest: 'build/',  
            },
            views: {
                expand: true,
                cwd: 'views/',
                src: '*.html',
                dest: 'build/views/',  
            }
            
        }
    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    require('load-grunt-tasks')(grunt);
    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('w', ['watch']);
    grunt.registerTask('default', ['concat','uglify','imagemin', 'autoprefixer', 'copy']);

};