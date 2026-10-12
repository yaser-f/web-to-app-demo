# Web-to-Mobile Demo

A reference project demonstrating how to package a responsive web application into native iOS and Android apps using Capacitor.

## Local Development

### 1. Browser Preview

Run the local development server:

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser. 

### 2. Sync Changes to Native Projects

When you make changes to files inside `www/`, sync them to the Android and iOS directories:

```bash
npm run sync
```

## Building Native Apps

### Opening in Native IDEs

* Android Studio:
  ```bash
  npm run open:android
  ```
* Xcode (macOS):
  ```bash
  npm run open:ios
  ```

### Automated Cloud Builds

If you do not have Android Studio or Xcode installed locally:

* Android: The included GitHub Actions workflow (`.github/workflows/build-android.yml`) compiles a debug APK automatically on push or pull request.
* iOS: Can be built and distributed to Apple TestFlight using GitHub Actions macOS runners or cloud CI services with App Store Connect credentials.
