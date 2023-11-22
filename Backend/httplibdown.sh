TARGET_DIR="./includes"

if [ ! -d "$TARGET_DIR" ]; then
    echo "Target directory does not exist. Creating it..."
    mkdir -p "$TARGET_DIR"
fi

#checks for the operating system in use
if [[ "$OSTYPE" == "linux-gnu"* ]]; then
    echo "Detected Linux OS"
    DOWNLOADER="wget"
elif [[ "$OSTYPE" == "darwin"* ]]; then
    echo "Detected macOS"
    DOWNLOADER="curl -O"
elif [[ "$OSTYPE" == "msys" || "$OSTYPE" == "win32" ]]; then
    echo "Detected Windows (MSYS or Git Bash)"
    DOWNLOADER="curl -O"
else
    echo "Unsupported operating system"
    exit 1
fi

$DOWNLOADER -P "$TARGET_DIR" "https://raw.githubusercontent.com/yhirose/cpp-httplib/master/httplib.h"

echo "httplib.h downloaded successfully to $TARGET_DIR"
