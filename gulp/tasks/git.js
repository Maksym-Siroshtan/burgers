import ghPages from "gulp-gh-pages";

export const ghPages = () => {
  return app.gulp.src(`${app.path.dist}/**/*.*`).pipe(ghPages());
};
