/**
 * CommentTree organizes the data into a parent/child hiearchy;
 * The idea here is, since we know an item with a valid 'parent' value is a child,
 * we can filter out the parents then find the children using a sort of recursive approach
 */
class CommentTree {
  /**
   *
   * @param {array} data
   */
  constructor(data) {
    this.data = data;
    this.dataByUpvotes = [];
  }

  sortedByUpvotes() {
    return this.data.sort((a, b) => b.timestamp - a.timestamp);
  }

  checkForIdMatch(items, parentId) {
    return items.filter((item) => item.parent === parentId);
  }

  findParents() {
    return this.dataByUpvotes.filter((item) => !item.parent);
  }
  findChildren(data) {
    return data.map((item) => {
      item.children = this.checkForIdMatch(this.dataByUpvotes, item.id);
      this.findChildren(item.children);
      return item;
    });
  }

  buildCommentTree() {
    this.dataByUpvotes = this.sortedByUpvotes();
    const parents = this.findParents();

    return this.findChildren(parents);
  }
}

module.exports = CommentTree;
