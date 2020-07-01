const user = ""
/**
 * ?page=页数&per_page=每页包含数量
 * access_token=OAUTH-TOKEN
 * Authorization: token OAUTH-TOKEN
 * client_id=YOUR-CLIENT-ID&client_secret=YOUR-CLIENT-SECRET
 */

const api = {
    // 
    homeInfo: `https://api.github.com/users/${user}`, // 用户主要信息
    following: `https://api.github.com/users/${user}/following`, // 我的关注
    followers: `https://api.github.com/users/${user}/followers`, // 我的粉丝
    repos: `https://api.github.com/users/${user}/repos`, // 个人所有repo
    repo: `https://api.github.com/repos/${user}/repo`, // repo详细信息
    gists: `https://api.github.com/repos/solomonxie/gists/contents`, // 获取某个repo的内容列表
    contents: `https://api.github.com/repos/solomonxie/gists/contents/目录名`, // 获取repo中子目录的内容列表
    commits: `https://api.github.com/repos/${user}/repo/commits`, // repo中所有的commits列表
    issues: `https://api.github.com/repos/${user}/repo/issues`, // issues列表

    createContent: { // 创建或更新文件
        type: 'PUT',
        url: `https://api.github.com/repos/${user}/repo/contents/文件路径`,
        params: {
            "message": "create a file",
            "content": "bXkgbmV3IGZpbGUgY29udGVudHM=",
            "sha": "57642f5283c98f6ffa75d65e2bf49d05042b4a6d"
        }
    },
    deleteContent: { // 删除文件
        type: 'DELETE',
        url: `https://api.github.com/repos/${user}/repo/contents/文件路径`,
        params: {
            "message": "delete a file",
            "sha": "46d2b1f2ef54669a974165d0b37979e9adba1ab2"
        }
    },
    addIssue: {
        type: 'POST',
        url: `https://api.github.com/repos/${user}/repo/issues`,
        params: {
            "title": "Creating issue from API",
            "body": "Posting a issue from Insomnia"
        }
    },
    modifyIssue: {
        type: 'PATCH',
        url: `https://api.github.com/repos/${user}/repo/issues/序号`,
        params: {
            "title": "Creating issue from API ---updated",
            "body": "Posting a issue from Insomnia \n\n Updated from insomnia.",
            "state": "open"
        }
    }

    

}