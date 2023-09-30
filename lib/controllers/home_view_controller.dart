import 'dart:math';
import 'package:flutter/material.dart';
import 'package:topjoy/constants.dart' as constants;
import 'package:get/get.dart';

class HomeViewController extends GetxController {
  HomeViewController(this.context);

  BuildContext context;
  bool isInitialized = false;
  int bottlecapState = 0;

  String giveMeNewMessage() {
    if (bottlecapState == 10) {
      int random = Random().nextInt(constants.messages.length);
      return constants.messages[random];
    } else {
      return "";
    }
  }

  void flipTheBottlecap() async {
    // ha nulla az érték akkor a kupukakot fel szeretnénk fordítani
    // ha 10 az érték akkor vissza szeretnénk forgatni
    bool condition = (bottlecapState == 0);

    for (int i = (condition) ? 0 : 10;
        (condition) ? i < 11 : i >= 0;
        (condition) ? i++ : i--) {
      bottlecapState = i;
      await Future.delayed(Duration(milliseconds: 15));
      update();
    }
  }

  void preloadAllImages() {
    for (int i = 0; i < 11; i++) {
      precacheImage(AssetImage('images/bottlecap_$i.png'), context);
    }
    isInitialized = true;
    update();
  }

  @override
  Future<void> onInit() async {
    super.onInit();
    preloadAllImages();
  }
}
