## CSS Minification Performance Test
I thought `libsass` was slow and never thought minification could take that long. I am using `gulp-minify-css` and it takes about 28 seconds to minify an SCSS compiled stream from above source.

### How to test?
```bash
npm install
gulp scss #only scss compilation
gulp scss:minify #scss + minification
```
### Current Results
```
╭─praveenp in ~/code/experiments/libsass-test using
╰─○ gulp scss                             
[18:59:20] Using gulpfile ~/code/experiments/libsass-test/gulpfile.js
[18:59:20] Starting 'clean:css'...
[18:59:20] Finished 'clean:css' after 3.51 ms
[18:59:20] Starting 'scss'...
Cleaning CSS Complete
[18:59:21] Finished 'scss' after 553 ms

╭─praveenp in ~/code/experiments/libsass-test using
╰─○ gulp scss:minify
[18:59:55] Using gulpfile ~/code/experiments/libsass-test/gulpfile.js
[18:59:55] Starting 'clean:css'...
[18:59:55] Finished 'clean:css' after 3.44 ms
[18:59:55] Starting 'scss:minify'...
Cleaning CSS Complete
[19:00:23] Finished 'scss:minify' after 29 s
```