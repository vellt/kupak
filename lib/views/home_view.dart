import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:topjoy/controllers/home_view_controller.dart';
import 'package:topjoy/views/loading_view.dart';

class HomeView extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    HomeViewController controller = Get.put(HomeViewController(context));
    return GetBuilder<HomeViewController>(
      init: controller,
      builder: (controller) {
        if (!controller.isInitialized) {
          return LoadingView();
        } else {
          return Scaffold(
            body: Container(
              child: Center(
                child: GestureDetector(
                  child: Stack(
                    children: [
                      Image.asset(
                        'images/bottlecap_${controller.bottlecapState}.png',
                        width: 250,
                        fit: BoxFit.cover,
                      ),
                      Container(
                        height: 250,
                        width: 250,
                        padding: EdgeInsets.all(40),
                        child: Center(
                          child: (controller.bottlecapState == 10)
                              ? Text(
                                  controller.giveMeNewMessage(),
                                  textAlign: TextAlign.center,
                                  style: GoogleFonts.acme(
                                    fontWeight: FontWeight.w900,
                                    fontSize: 20,
                                    color: Color.fromARGB(255, 36, 58, 37),
                                  ),
                                )
                              : null,
                        ),
                      )
                    ],
                  ),
                  onTap: () {
                    controller.flipTheBottlecap();
                  },
                ),
              ),
              width: double.infinity,
              height: double.infinity,
              decoration: BoxDecoration(
                image: DecorationImage(
                  image: AssetImage('images/background.jpg'),
                  fit: BoxFit.cover,
                ),
              ),
            ),
          );
        }
      },
    );
  }
}
