module.exports = function (grunt) {
    "use strict";

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        clean: {
            dist: ['dist']
        },
        copy: {
            js: {
                src: ['js/spinner.js'],
                dest: 'dist/'
            }
        },
        jshint: {
            options: {
                jshintrc: 'js/.jshintrc'
            },
            gruntfile: {
                src: 'Gruntfile.js'
            },
            src: {
                src: ['js/*.js']
            },
            test: {
                src: ['js/unit/**/*.js', 'js/unit/**/**/*.js']
            }
        },
//        qunit: {
//            files: ['tests/js/*.html', 'tests/js/**/*.html']
//        },
        uglify: {
            core: {
                src: ['js/spinner.js'],
                dest: 'dist/js/spinner.min.js'
            }
        },
        watch: {
            src: {
                files: ['js/*.js'],
                tasks: ['dist-js']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('test', ['jshint', 'qunit']);
    grunt.registerTask('dist', ['clean', 'uglify', 'copy']);
    grunt.registerTask('default', ['test', 'dist']);
};