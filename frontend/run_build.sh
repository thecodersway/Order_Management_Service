
install_dependencies() {
    echo "Installing dependencies..."
    npm install
    if [ $? -ne 0 ]; then
        echo "Failed to install dependencies"
        exit 1
    fi
}


build_apk() {
    echo "Building the APK..."
    
   

    ./gradlew assembleRelease
    if [ $? -ne 0 ]; then
        echo "Failed to build APK"
        exit 1
    fi
}


check_apk() {
    APK_PATH="app/build/outputs/apk/release/app-release.apk"
    
    if [ -f "$APK_PATH" ]; then
        echo "Build Successful"
    else
        echo "Build failed"
        exit 1
    fi
}


install_dependencies
build_apk
check_apk

install_dependencies() {
    echo "Installing dependencies..."
    npm install
    if [ $? -ne 0 ]; then
        echo "Failed to install dependencies"
        exit 1
    fi
}

# Function to build the APK
build_apk() {
    echo "Building the APK..."
    cd android || { echo "Failed to enter android directory"; exit 1; }

    ./gradlew assembleRelease
    if [ $? -ne 0 ]; then
        echo "Failed to build APK"
        exit 1
    fi
}

# Function to check APK and display appropriate message
check_apk() {
    APK_PATH="app/build/outputs/apk/release/app-release.apk"
    
    if [ -f "$APK_PATH" ]; then
        echo "Build Successful"
    else
        echo "Build failed"
        exit 1
    fi
}

# Main script execution
install_dependencies
build_apk
check_apk


    

