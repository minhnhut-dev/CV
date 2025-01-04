#!/bin/bash

# Hàm hiển thị lỗi và thoát
function error_exit {
    echo "[ERROR] $1"
    exit 1
}

# Kiểm tra nếu git đã được cài đặt
if ! command -v git &> /dev/null; then
    error_exit "Git chưa được cài đặt. Hãy cài đặt Git trước khi chạy script này."
fi

# Kiểm tra nếu đang ở trong một repository Git
if ! git rev-parse --is-inside-work-tree &> /dev/null; then
    error_exit "Bạn không ở trong một repository Git."
fi

# Lấy branch hiện tại
current_branch=$(git branch --show-current)

# Kiểm tra nếu không tìm thấy branch hiện tại
if [ -z "$current_branch" ]; then
    error_exit "Không tìm thấy branch hiện tại. Có thể bạn đang ở trạng thái detached HEAD."
fi

echo "Branch hiện tại của bạn là: $current_branch"

# Tên branch chính (mặc định là 'main')
main_branch="main"

# Fetch thông tin mới nhất từ remote
echo "Fetching latest changes from remote..."
git fetch || error_exit "Không thể fetch thông tin từ remote."

# Lấy commit hash mới nhất của branch main từ remote
echo "Lấy commit hash mới nhất của branch $main_branch từ remote..."
main_remote_commit=$(git rev-parse origin/$main_branch 2>/dev/null) || error_exit "Không tìm thấy branch 'origin/$main_branch'."

# Lấy commit hash của branch hiện tại
echo "Lấy commit hash của branch hiện tại ($current_branch)..."
current_branch_commit=$(git rev-parse $current_branch 2>/dev/null) || error_exit "Không thể lấy thông tin commit của branch '$current_branch'."

# Kiểm tra xem branch hiện tại đã merge hết commit từ branch main chưa
echo "Kiểm tra nếu branch $current_branch đã đồng bộ với origin/$main_branch..."
if git merge-base --is-ancestor $main_remote_commit $current_branch_commit; then
    echo "[SUCCESS] Branch '$current_branch' đã được đồng bộ với branch '$main_branch'."
    exit 0
else
    error_exit "Branch '$current_branch' chưa được đồng bộ với branch '$main_branch'. Hãy pull các thay đổi mới nhất."
fi
