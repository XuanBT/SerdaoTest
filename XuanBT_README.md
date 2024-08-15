You use git to clone source code with Reposity Url with command line like: git clone https://github.com/XuanBT/SerdaoTest.git
After clone source sucessfully, You should do many follow steps to run app on IOS(Simulator) or Android(emulator)

1. Set up to run the Project on IOS
  Installing requirements:
  - You need install Node(v18 or higher), React native CLI, Xcode, Simulator on your Macbook
  After installed System requirements, you should open terminal and run below command lines:
  - cd <--Project folder-->
  - yarn or npm install // install all package of the project
  - cd ios //navigate to ios folder of project
  - sudo gem install cocoapods //install pod command line for ios, skip to run this command line if your has already installed cocoapods
  - rm Podfile.lock   //delete Podfile.lock in ios folder
  - pod install --repo-update   // install pod libs for ios
  - cd .. //navigate back to project folder
  - yarn ios or npm run ios  //run app on IOS simulator

2. Set up to run the project on Android
  Installing requirements:
   - install Node(v18 or higher), React native CLI, JDK(v17), Android studio, Android 14(S)SDK (include: SDK Platform 34, Intel x86 Atom_64 System Image) on your device

  After Installing dependencies, you add or update your JAVA_HOME environment variable to ~/.zshrc (or ~/.bashrc) file in macos
     - export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk-17.jdk/Contents/Home // add this lines to ~/.zshrc (or ~/.bashrc) file
  
  Next, You will set up enviroment variable for Android studio
     - You add below command lines to ~/.zshrc (or ~/.bashrc) file :
        export ANDROID_SDK_ROOT=$HOME/Library/Android/sdk
        export PATH=$PATH:$ANDROID_SDK_ROOT/emulator
        export PATH=$PATH:$ANDROID_SDK_ROOT/platform-tools

  After set up environment variables successfully, you run below commands:
    - cd <--Project folder-->
    - npm run android or yarn android
