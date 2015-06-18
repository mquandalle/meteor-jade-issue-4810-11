if (Meteor.isClient) {
  var jadeTemplate = Template.formJade.renderFunction.toString();
  var spacebarsTemplate = Template.formSpacebars.renderFunction.toString();
  console.log('jade: ', jadeTemplate);
  console.log('spacebars: ', spacebarsTemplate);
  console.assert(jadeTemplate === spacebarsTemplate);
}
