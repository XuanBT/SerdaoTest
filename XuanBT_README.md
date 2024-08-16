You use git command to clone source code with reposity url like: git clone https://github.com/XuanBT/SerdaoTest.git <br/>
After clone source sucessfully, You should do many follow steps to run app on IOS(Simulator) or Android(emulator)

1. Set up to run the Project on IOS <br/>
    Installing requirements:
      You need install Node(v18 or higher), React native CLI, Xcode, Simulator, CocoaPods on your computer.<br/>

    After installed System requirements, you should open terminal and run below command lines:
    - cd <--Project folder-->   // navigate to project folder
    - yarn or npm install // install all packages of the project
    - cd ios //navigate to ios folder of project
    - sudo gem install cocoapods //install pod command line for ios, skip this command line if you have already installed cocoapods
    - rm Podfile.lock //delete Podfile.lock in ios folder
    - pod install --repo-update // install pod libs for ios
    - cd .. //navigate back to project folder
    - yarn ios or npm run ios //run app on IOS simulator

2. Set up to run the project on Android <br/>
    Installing requirements:
      You need to install Node(v18 or higher), React native CLI, JDK(v17), Android studio, Android 14 SDK (include: SDK Platform 34, Intel x86 Atom_64 System Image) on your computer

    After Installing dependencies, you add or update your JAVA_HOME environment variable to ~/.zshrc (or ~/.bashrc) file 
    - export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk-17.jdk/Contents/Home // add this line to ~/.zshrc (or ~/.bashrc) file

    Next, you will set up enviroment variable for Android studio, you add below lines to ~/.zshrc (or ~/.bashrc) file:
    - export ANDROID_SDK_ROOT=$HOME/Library/Android/sdk
    - export PATH=$PATH:$ANDROID_SDK_ROOT/emulator
    - export PATH=$PATH:$ANDROID_SDK_ROOT/platform-tools

    Next step, you need to create a Android virtual device(Pixel 6a API 34 recommend) from Android Virtual Device Manager in Android Studio. After that, you launch this virtual device. Final step, you run below command lines on Terminal:
    - cd <--Project folder--> // navigate to project folder
    - yarn or npm install // install all packages of the project, skip this command line if you have already installed all packages of project
    - npm run android or yarn android   // make sure you launched an android emulator before run this command line

Notes: you should use macbook to do above setup steps
